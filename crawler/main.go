package main

import (
	"fmt"
	"math/rand"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/gocolly/colly"
	"github.com/gocolly/colly/extensions"
)

const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

func RandomString() string {
	// rand.Seed初始化随机数的资源库, 如果不执行这行, 不管运行多少次都返回同样的值
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, rand.Intn(10)+10)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	fmt.Printf(`RandomString %s`, string(b))
	return string(b)
}

func doTianYa() {
	t := time.Now()
	number := 1
	c := colly.NewCollector(func(c *colly.Collector) {
		extensions.RandomUserAgent(c) // 设置随机头
		c.Async = true
	},
	// http://bbs.tianya.cn/list-lookout-1.shtml
	// colly.URLFilters(
	// 	regexp.MustCompile("http://bbs.tianya.cn/list-lookout-1.shtml"),
	// ),
	) // 创建收集器
	// 响应的格式为HTML,提取页面中的链接
	c.OnHTML("div.mt5 td.td-title a[href]", func(e *colly.HTMLElement) {
		link := e.Attr("href")
		fmt.Printf("find link: %s\n", e.Request.AbsoluteURL(link))
		c.Visit(e.Request.AbsoluteURL(link))
	})
	// 获取电影信息
	c.OnHTML("div.bbs-content", func(e *colly.HTMLElement) {
		e.DOM.Each(func(i int, selection *goquery.Selection) {
			movies := selection.Find("span.title").First().Text()
			director := strings.Join(strings.Fields(selection.Find("div.bd p").First().Text()), " ")
			quote := selection.Find("p.quote span.inq").Text()
			fmt.Printf("%d --> %s:%s %s\n", number, movies, director, quote)
			number += 1
		})
	})
	c.OnError(func(response *colly.Response, err error) {
		fmt.Println(err)
	})
	// http://bbs.tianya.cn/list-free-1.shtml 天涯杂谈
	// http://bbs.tianya.cn/list-lookout-1.shtml
	c.Visit("http://bbs.tianya.cn/list-free-1.shtml")
	c.Wait()
	fmt.Printf("花费时间:%s", time.Since(t))
}

func main() {
	doTianYa()
	// writer, err := os.OpenFile("collector.log", os.O_RDWR|os.O_CREATE, 0666)
	// if err != nil {
	// 	panic(err)
	// }
	// // http://bbs.tianya.cn/list-lookout-1.shtml

	// c := colly.NewCollector(colly.Debugger(&debug.LogDebugger{Output: writer}), colly.MaxDepth(2))
	// // 请求前的准备
	// c.OnRequest(func(r *colly.Request) {
	// 	r.Headers.Set("User-Agent", RandomString())
	// })
	// // c.OnHTML("a[href]", func(e *colly.HTMLElement) {
	// // 	if err := e.Request.Visit(e.Attr("href")); err != nil {
	// // 		log.Printf("visit err: %v", err)
	// // 	}
	// // })

	// // if err := c.Visit("http://go-colly.org/"); err != nil {
	// // 	panic(err)
	// // }
	// // c := colly.NewCollector()

	// if p, err := proxy.RoundRobinProxySwitcher(
	// 	"socks5://127.0.0.1:1337",
	// 	"socks5://127.0.0.1:1338",
	// 	"http://127.0.0.1:8080",
	// ); err == nil {
	// 	c.SetProxyFunc(p)
	// }
}

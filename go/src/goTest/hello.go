package main
import "fmt"
func main(){
	fmt.Println("hello word")
	var a = 123
	var b = "asd"
    var url="Code=%d&endDate is %s\n"
	fmt.Printf(url,a,b)
	const length =10
	const width =10
	const area = length * width
	ss:=length * length
	fmt.Printf("面积为%d\n,长度平方为%d\n",area,ss)
	const (aa=1;bb=2;cc= aa * bb)
	fmt.Printf("aa is %d,bb is %d,cc is %d\n",aa,bb,cc)
	// test()
	balance:=[...]int{1,2,4}
	var balance1=[5]int{1:3}
	fmt.Println(balance,balance1)
	aaa:=100
	ip:=&aaa
	fmt.Println("ip的指针地址是%x,*ip变量是",ip,*ip)

}

func test(){
	var a = 0;
	for true{
		a++
		fmt.Printf("a is %d\n",a)
		if a>3 {
			fmt.Printf("a iis %d\n",a)
			break
		}
	}
}

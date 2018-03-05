package main

import (
    "fmt"
)

func main() {
	sum := 0
	j := 1
	for i := 0; i < 10000; i++ {
		sum += i
		j = i
		fmt.Println(1)
	}
	fmt.Println(j)
}

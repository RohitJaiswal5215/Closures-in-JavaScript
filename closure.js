function outerFunction(){
    const message = "Hello"
    
    return function innerFunction(){
      console.log(message)
    }
  }
  const output = outerFunction()
  output()
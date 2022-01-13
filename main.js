const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//define a function (1 param - computer object)
    //returns html representation

const computerHTMLMaker = (computerObject) => {
    const computerHTMLSection = `<section>${computerObject.manufacturer} ${computerObject.make} ${computerObject.model} has ${computerObject.specs.memory} GB of memory, ${computerObject.specs.hardDrive}GB of hard drive space, and a processor speed of ${computerObject.specs.processor} </section>`
    
    return computerHTMLSection
}

const stringReturned = computerHTMLMaker(computer)
console.log(stringReturned)



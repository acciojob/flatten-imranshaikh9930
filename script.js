//your JS code here. If required.
function flatten(value) {

	if(Array.isArray(value)){
		return value.reduce((acc,item)=>acc.concat(flatten(item)),[]);
	}
	else if(typeof value === "object" && value !== null){

		let flattenedObject = {};

		for(let key in value){
			if(value.hasOwnProperty(key)){
			    let flatValue = flatten(value[key]);
				if(typeof flatValue === 'object' && !Array.isAraray(flatValue)){
					for(let subkey in flatValue){
						if(flatValue.hasOwnProperty(subkey)){
							flattenedObject[subkey] = flatValue[subkey];
						}
					}
				}else{
					flattenedObject[key] = faltValue;
				}
			}else{
				return value;
			}
		}
	}
}

module.exports=flatten;

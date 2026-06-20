function converter(config_data, direction){
	if (direction == 'toForm'){ // convert FROM native object format to form schema array format

		// config format is an array of dissimilar items, strings an objects/key:value)
		if(config_data.electronSwitches && Array.isArray(config_data.electronSwitches)){
			// create entry array
			let nc = []
			config_data.electronSwitches.forEach( (sw)=>{
				
				let entry =  {}
				switch(typeof sw){
					case "string":
						entry ['typef']="literal"
						entry ['valuef'] = sw
						break;
					case "object":
						entry['typef']='other'
						entry['ovaluef']=sw
						break;					
				}
				nc.push(entry)
			})
			// pass back a good copy of the data
			config_data.electronSwitches= JSON.parse(JSON.stringify(nc))
		}

		return config_data
	}
	else if (direction == 'toConfig'){  // convert TO old array format
		
	
		if(config_data.electronSwitches && Array.isArray(config_data.electronSwitches)){
			// create empty array
			let nc = []
			// form format is an array , need an object for config.js
			config_data.electronSwitches.forEach(e =>{
				// for each key (literal or other)
				// make an object entry from the two fields in each array element
				// as defined in the custom schema
				// special handling for the two date related values
				switch(e.typef){
					case 'literal':
						// custom field, get the data from the right place in the structure
						nc.push(e.valuef)
						break
					case 'other':
						// default location for all others
						let v = e.ovaluef.split(':')
						let x={}
						x[v[0]]=v[1]
						nc.push(x)
				}
			})
			// pass back a good copy of the data
			config_data.electronSwitches= JSON.parse(JSON.stringify(nc))
		}
		return config_data
	}
}
exports.converter=converter
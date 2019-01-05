function assert(expr, title, cb) {
	if(expr) {
		console.log(title + ' PASSED')
		if(cb) cb(true)
	} else {
		console.log(title + ' FAILED')
		if(cb) cb(false)
	}
}

function cmpArr(arr1, arr2) {
	if(arr1.length != arr2.length) return false
	for(var i = 0; i < arr1.length; i++) {
		if(arr1[i] != arr2[i]) return false
	}
	return true
}

module.exports = {
	assert,
	cmpArr
}
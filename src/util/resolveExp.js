const resolveExp = (values, key) => {
	if (!values || !key) {
		return values;
	}
	if (typeof key === "function") {
		return key(values);
	}
	if (Array.isArray(values)) {
		var result = [];
		for (var i = 0; i < values.length; i++) {
			var row = values[i];
			var resolvedValue = resolveExp(row, key);
			if (resolvedValue !== undefined) {
				if (Array.isArray(resolvedValue)) {
					for (var j = 0; j < resolvedValue.length; j++) {
						/* for save the duplicate values for field other then _id @sourabh -- 4-2-17*/
						if (key !== "_id" || result.indexOf(resolvedValue[j]) === -1) {
							result.push(resolvedValue[j]);
						}
					}
				} else {
					if (key !== "_id" || result.indexOf(resolvedValue) === -1) {
						result.push(resolvedValue);
					}
				}
			}
		}
		return result;
	} else {
		var value = values[key];
		if (value !== undefined) {
			return value;
		}
		var index = key.indexOf(".");
		if (index === -1) {
			return;
		}
		var firstPart = key.substring(0, index);
		var nextPart = key.substring(index + 1);
		return resolveExp(values[firstPart], nextPart);
	}
};
export default resolveExp;

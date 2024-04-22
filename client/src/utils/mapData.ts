interface PollutantData {
	AQI: number;
	PM10: number;
	PM25: number;
	ammonia: number;
	carbonDioxide: number;
	carbonMonoxide: number;
	hour: number;
	methane: number;
	nitrogenDioxide: number;
	nitrogenOxide: number;
	ozone: number;
	sulfurDioxide: number;
}

interface MappedData {
	data: number[];
	label: string;
}

// Provided data
const pollutantData: PollutantData = {
	AQI: 47,
	PM10: 1,
	PM25: 8,
	ammonia: 4,
	carbonDioxide: 408,
	carbonMonoxide: 7,
	hour: 0,
	methane: 28,
	nitrogenDioxide: 2,
	nitrogenOxide: 16,
	ozone: 39,
	sulfurDioxide: 7,
};

// Function to map data into the required format
function mapDataToFormat(data: PollutantData): MappedData[] {
	const mappedData: MappedData[] = [];
	Object.keys(data).forEach((key: keyof typeof pollutantData) => {
		if (key !== "hour") {
			mappedData.push({
				data: [data[key]],
				label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
			});
		}
	});
	return mappedData;
}

export { mapDataToFormat };

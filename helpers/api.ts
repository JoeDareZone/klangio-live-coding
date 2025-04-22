export const fetchData = async (url: string) => {
	try {
		const response = await fetch(url)
		if (!response.ok) throw new Error('Network response was not ok')
		return await response.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const postData = async (url: string, payload: any) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
		if (!response.ok) throw new Error('Failed to post data')
		return await response.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}

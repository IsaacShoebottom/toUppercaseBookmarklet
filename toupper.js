javascript:(() => {
	document.querySelectorAll('input[type="text"]').forEach((input) => {
		if (input.readOnly) return;
		if (input.id.toLowerCase().includes('Remarks')) return;
		input.value = input.value.toUpperCase();
	});
})();
process.argv.forEach(arguments=>{
	let value = null;
	if(arguments.startsWith('--')){
		value = arguments.substring(arguments.indexOf('=')+1);
		let cwd = process.cwd();
		console.log(cwd);
	}
})
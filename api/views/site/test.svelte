<script>
	let name  = 'Hello World!!!!';
	let count = 0;

	$: if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}

	console.log(count);
	console.log(name);

</script>

<h1>
	Hi, {name}.
</h1>

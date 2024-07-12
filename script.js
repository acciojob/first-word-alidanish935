function firstWord(s) {
  // your code here
	const trimmedStr = s.trim();
	const res = trimmedStr.split(" ");
	return res[0];
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));

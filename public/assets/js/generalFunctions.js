function toggleSection(event){
	event.preventDefault();

	var dataSet = event.target.dataset;
	var status = dataSet.open;
	var masterElement = document.getElementById(event.target.id||event.srcElement.id);
	var slaveElement = document.getElementById(dataSet.slaveelementid);
	var closedLabel = dataSet.closedlabel;
	var openLabel = dataSet.openlabel;
	
	if (status === "false") {
		slaveElement.hidden = false;
		masterElement.innerText = openLabel;
		masterElement.dataset.open = "true";
	} else {
		slaveElement.hidden = true;
		masterElement.innerText = closedLabel;
		masterElement.dataset.open = "false";
	}
}

function createProgressBar(element, size){ 
	var x = 1;
	var adder = 1;
	function addOne(){
		var bars = '<p>|';
		for (var i = 0; i < x; i++){ bars += ' | '; }
		bars += '</p>';
		element.innerHTML = bars;
		if (x === size){
			adder = -1;
		} else if ( x === 0){
			adder = 1;
		}
		x += adder;
	};
	setInterval(addOne, 300);
}

// Create new error objects, that prototypically inherit from the Error constructor
function FileError(message) {
  this.name = 'FileError';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
FileError.prototype = Object.create(Error.prototype);
FileError.prototype.constructor = FileError;

function NameError(message) {
  this.name = 'NameError';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
NameError.prototype = Object.create(Error.prototype);
NameError.prototype.constructor = NameError;

function ChannelNameError(message) {
    this.name = 'ChannelNameError';
    this.message = message || 'Default Message';
    this.stack = (new Error()).stack;
}
ChannelNameError.prototype = Object.create(Error.prototype);
ChannelNameError.prototype.constructor = ChannelNameError;

function ChannelPasswordError(message) {
    this.name = 'ChannelPasswordError';
    this.message = message || 'Default Message';
    this.stack = (new Error()).stack;
}
ChannelPasswordError.prototype = Object.create(Error.prototype);
ChannelPasswordError.prototype.constructor = ChannelPasswordError;
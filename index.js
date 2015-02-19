'use strict';

var config = {
	base: {
		jpg:  'http://img.youtube.com/vi',
	},     

	quality: {
		default: 'default',
		high:    'hqdefault',
		medium:  'mqdefault',
	}
}; 

var Youthumb = function(id) {	
	if (!(this instanceof Youthumb)){
        return new Youthumb(id);
  } 

  this.id = id;
}

Youthumb.prototype.get = function() {
	var arg = arguments[0],
			format = 'jpg', 
		  filename;

  if (arg in config.quality) {
		filename = config.quality[arg];
	
	} else if (typeof arg == 'number' && arg < 4) {
		filename = arg;
	
	} else {
		filename = 'default'
	}
	 
	return config.base[format] 
				 + '/' 
				 + this.id 
				 + '/' 
				 + filename 
				 + '.' 
				 + format;
};

module.exports = Youthumb; 

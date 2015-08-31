/* 
* @Author: sebb
* @Date:   2014-06-14 00:18:08
* @Last Modified by:   sebb
* @Last Modified time: 2015-08-31 19:20:20
*/

(function($) {

	$(document).ready(function() {

	});

	$(document).on('change', 'input[type=file]', previewImage);

	function previewImage() {
		console.log("asdasd");
		
		var self = this;

		var oFReader = new FileReader();
		oFReader.readAsDataURL($(self)[0].files[0]);

		oFReader.onload = function (oFREvent) {
			console.log(oFREvent.target.result);

			$(self).parent().find('input[type=hidden]').val(oFREvent.target.result);
			$(self).parent().find('.preview').css('background-image', 'url('+oFREvent.target.result+')');
			$(self).parent().find('.preview').addClass("has-file");
			$(self).addClass('selected');
		};
	};
})(jQuery);
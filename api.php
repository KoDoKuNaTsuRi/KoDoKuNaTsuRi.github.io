<?php
$img_array = glob('apiimg/*.{gif,jpg,png,jpeg,webp,bmp}', GLOB_BRACE);
if(count($img_array) == 0) die('没有找到图片文件。MuaOoO ~ '.dirname(__FILE__).'/apiimg/ 文件夹');
header('Content-Type: image/jpg');
echo(file_get_contents($img_array[array_rand($img_array)]));
?>
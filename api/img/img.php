<?php
$seed = time();
$num = rand(1,3);
$picpath = "http://kodokunatsuri.github.io/api/img/ (".$num.").jpg";
die(header("Location: $picpath"));
?>
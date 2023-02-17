<?php
$seed = time();
$num = rand(1,3);
$picpath = "https://kodokunatsuri.github.io/img/ (".$num.").jpg";
die(header("Location: $picpath"));
?>
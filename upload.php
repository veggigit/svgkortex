<?php

$targetpath = "uploads/" . basename($_FILES["upload"]["name"]);
move_uploaded_file($_FILES["upload"]["tmp_name"], $targetpath);
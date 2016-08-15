<?php

$config['env'] = 'develop';
/*
$config['develop'] = array(
    // set base url
    'base_url' => 'http://localhost:85/',
    //set database config
    'host' => 'localhost',
    'dbname' => 'resource_db',
    'username' => 'root',
    'password' => ''
);
*/

$config['prod'] = [
    'settings' => [
        'url' => [
            'base_url' => 'http://mjvila.tigrimigri.com'
        ],
        'database' => [
            'host' => 'localhost ',
            'dbname' => 'mjvila_db',
            'username' => 'mjvila',
            'password' => 'Caqt1LAEj'
        ],
    ],
];

$config['develop'] = [
    'settings' => [
        'url' => [
            'base_url' => 'localhost'
        ],
        'database' => [
            'host' => 'localhost',
            'dbname' => 'connect_four',
            'username' => 'root',
            'password' => ''
        ],
    ],
];


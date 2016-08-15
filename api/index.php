<?php
require 'vendor/autoload.php';
require 'src/config.php';
require 'src/Entities/DBManager.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Entities\Players;

$env = $config['env'];
$app = new \Slim\App($config[$env]);

$app->post('/players/add', function ($request, $response) {

    $winnerName = $request->getParam('winnerName');
    $loserName = $request->getParam('loserName');
    $winnerPic = $request->getParam('winnerPic');
    $loserPic = $request->getParam('loserPic');

    $conf = $this->get('settings')['database'];

    $data = array(
    			array(
				':name' => $winnerName,
				':picture' => $winnerPic,
				':won' => 1,
				':lost' => 0
				),
				array(
				':name' => $loserName,
				':picture' => $loserPic,
				':won' => 0,
				':lost' => 1
				)
    		);

    $players = new Players($conf);
    $count = 0;
    
    foreach ($data as $playerData) {
    	$count = $players->insertPlayersMatch($playerData) + $count;
    }
    //print_r($count);

    $response->getBody()->write(json_encode($count));
    return $response;
});

$app->get('/players/scores', function ($request, $response) {
    $conf = $this->get('settings')['database'];
	$players = new Players($conf);
    $scoreboard = json_encode($players->getPlayersScoreBoard());
    $response->getBody()->write($scoreboard);
    return $response;
});

$app->run();
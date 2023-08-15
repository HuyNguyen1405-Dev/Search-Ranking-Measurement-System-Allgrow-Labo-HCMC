<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Google_Client;
use Google_Service_Webmasters;
use GuzzleHttp\Client;
use App\Models\Url;
use App\Models\Keyword;

class APIController extends Controller
{
    public function formData(Request $request){
        $url_link = $request->url_link;
        $keyword = $request->keyword;
        $data_url_link = new Url();
        $data_url_link->url_link = $url_link;
        $data_url_link->save();

        $url_id = $data_url_link->id;

        $data_keyword = new Keyword();
        $data_keyword->keyword = $keyword;
        $data_keyword->url_id = $url_id;
        $data_keyword->save();
        return response()->json(['message' => 'Send data to successfully']);
    }
    public function get_data_search(Request $request)
    {
        $keyword = "Allgrow labo";
        $url_link = "https://allgrow-labo.jp/vn/";

        $position = $this->getSearchRanking($keyword, $url_link);

        return response()->json(['position' => $position]);
    }

    private function getSearchRanking($keyword, $url)
    {
        $client = new Client();
        $response = $client->get('https://www.google.com/search', [
            'query' => [
                'q' => $keyword,
            ],
        ]);

        $body = (string) $response->getBody();

        // Phân tích kết quả tìm kiếm và tìm xem URL xếp hạng thứ mấy
        $position = $this->findUrlPosition($body, $url);

        return $position;
    }

    private function findUrlPosition($body, $url)
    {
        $position = false;
        $rank = 0;

        // Tìm kiếm xem URL có nằm trong kết quả tìm kiếm không
        while (($position === false)) {
            $positionStart = strpos($body, '<a href="');
            if ($positionStart !== false) {
                $positionEnd = strpos($body, '"', $positionStart + 9);
                $href = substr($body, $positionStart + 9, $positionEnd - $positionStart - 9);
                $decodedHref = html_entity_decode($href);
                $positionHref = strpos($decodedHref, $url);
                if ($positionHref !== false) {
                    $position = $rank;
                }
                $body = substr($body, $positionEnd + 1);
            }
            $rank++;
        }

        return $position;
    }
        
}
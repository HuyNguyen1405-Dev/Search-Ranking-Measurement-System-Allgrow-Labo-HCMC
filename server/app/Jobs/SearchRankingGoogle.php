<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Url;
use App\Models\Keyword;

class SearchRankingGoogle implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $url_link;
    protected $keyword;
    /**
     * Create a new job instance.
     */
    public function __construct($url_link, $keyword)
    {
        $this->url_link = $url_link;
        $this->keyword = $keyword;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $url_link = $this->url_link;
        $keyword = $this->keyword;
        
        $data_url_link = new Url();
        $data_url_link->url_link = $url_link;
        $data_url_link->save();

        $url_id = $data_url_link->id;

        $data_keyword = new Keyword();
        $data_keyword->keyword = $keyword;
        $data_keyword->url_id = $url_id;
        $data_keyword->save();
          // Khởi tạo Google Client
    }
}
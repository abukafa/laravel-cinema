<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Butterfly Effect',
                'slug' => 'the-butterfly-effect',
                'category' => 'Science Fiction',
                'video_url' => 'https://www.youtube.com/watch?v=8PkJYpUW95Q',
                'thumbnail' => 'https://i.ytimg.com/an_webp/8PkJYpUW95Q/mqdefault_6s.webp?du=3000&sqp=CODwirgG&rs=AOn4CLByWbwp4EwGua1xFntOzLFyutpZaw',
                'rating' => 4.8,
                'is_featured' => 0,
            ],
            [
                'name' => 'Teknologi Nano Pada Baju Besi',
                'slug' => 'teknologi-nano-pada-baju-besi',
                'category' => 'Science Fiction',
                'video_url' => 'https://www.youtube.com/watch?v=6whzIrHq02Q',
                'thumbnail' => 'https://i.ytimg.com/an_webp/6whzIrHq02Q/mqdefault_6s.webp?du=3000&sqp=CIjsirgG&rs=AOn4CLAMDFRQIy_G5S9LsEBCI_1M0NwgkA',
                'rating' => 4.0,
                'is_featured' => 0,
            ],
            [
                'name' => 'Stop Motion Terumit',
                'slug' => 'stop-motion-terumit',
                'category' => 'Cartoon',
                'video_url' => 'https://www.youtube.com/watch?v=VwhhqgAZJsg',
                'thumbnail' => 'https://i.ytimg.com/an_webp/VwhhqgAZJsg/mqdefault_6s.webp?du=3000&sqp=CJDCirgG&rs=AOn4CLAQ7BbtXo6SEV8CmycfUGszOwPR7A',
                'rating' => 3.9,
                'is_featured' => 1,
            ],
        ];
        Movie::insert($movies);
    }
}

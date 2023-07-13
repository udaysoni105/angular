<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Vendor;
class VendorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $vendors = [
            [
                'id' => 3,
                'Name' => 'Vendor 3',
                'Email' => 'p@gmail.com',
                'City' => 'mumbai',
                'State' => 'maharastra',
                'Country' => 'india',
            ],
            [
                'id' => 4,
                'Name' => 'Vendor 4',
                'Email' => 's@gmail.com',
                'City' => 'goa',
                'State' => 'maharastra',
                'Country' => 'india',
            ],
            // Add more vendors as needed
        ];

        foreach ($vendors as $vendorData) {
            Vendor::create($vendorData);
        }
    }
}

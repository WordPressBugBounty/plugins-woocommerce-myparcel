<?php declare(strict_types=1);

namespace MyParcelNL\Sdk\src\Adapter\DeliveryOptions;

/**
 * Class PickupLocationV2Adapter
 */
class PickupLocationV2Adapter extends AbstractPickupLocationAdapter
{
    /**
     * PickupLocation constructor.
     *
     * @param array $data
     */
    public function __construct(array $data)
    {
        $this->location_name     = $data["location_name"] ?? $data["location"];
        $this->location_code     = $data["location_code"];
        $this->retail_network_id = $data["retail_network_id"] ?? null;
        $this->street            = $data["street"];
        $this->number            = $data["number"];
        $this->postal_code       = $data["postal_code"];
        $this->city              = $data["city"];
        $this->cc                = $data["cc"];
    }
}

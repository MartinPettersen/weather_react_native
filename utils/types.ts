export interface WeatherDetails {
    air_pressure_at_sea_level: number;
    air_temperature: number;
    cloud_area_fraction: number;
    relative_humidity: number;
    wind_from_direction: number;
    wind_speed: number;
}

export interface Next12Hours {
    details: Record<string, never>;
    summary: {
        symbol_code: string;
    };
}

export interface Next1Hours {
    details: {
        precipitation_amount?: number;
    };
    summary: {
        symbol_code: string;
    };
}

export interface Next6Hours {
    details: {
        precipitation_amount?: number;
    };
    summary: {
        symbol_code: string;
    };
}

export interface WeatherData {
    instant: {
        details: WeatherDetails;
    };
    next_12_hours: Next12Hours;
    next_1_hours: Next1Hours;
    next_6_hours: Next6Hours;
}
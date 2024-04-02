"use client";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { Skeleton } from "antd";
import { useState, useEffect, useRef } from "react";
import { Order_Section } from "../Components/Buy/widget/Section_Ord";

export const Map = () => {
  // const [active, setActive] = useState<boolean>(true);
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyDc1_RiOCZYOwkJOfWj6uiTYnL3lF69coM",
  //   libraries: ["places"],
  // });
  // const [location, setLocation] = useState({ lat: 0, lng: 0 });
//   const [direction, setDirection] = useState(null);
//   const [distence, setDistence] = useState(" ");
//   const [duration, setDuration] = useState("");
// // @type
//   let destinationRef = useRef();
//   let originRef = useRef();
//   const submit = () => {
//     if (destinationRef.current.value === "" || originRef.current.value === "") {
//       return;
//     }
//     const directionService = new google.maps.DirectionsService()

//     const result = await directionService.route({
//         origin: originRef.current.value,
//         destination: destinationRef.current.value,
//         travelMode: google.maps.TravelMode.DRIVING,
//     })
//   };
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.error("Error getting geolocation:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  // if (!isLoaded) {
  //   return <Skeleton active paragraph={{ rows: 5 }} />;
  // }

  return (
    <>
      <div className="justify-between flex ">
        <Order_Section />
        <div className="border rounded-lg shadow-lg ">
          {/* <GoogleMap
            mapContainerStyle={{
              height: "700px",
              width: "1100px",
            }}
            zoom={15}
            center={location}
          >
            <Marker position={location} />
          </GoogleMap> */}
        </div>
      </div>
    </>
  );
};

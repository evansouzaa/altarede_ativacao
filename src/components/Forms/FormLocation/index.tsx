import "leaflet/dist/leaflet.css";
import { FormLocationContainer } from "./styles";
import { FormStyled } from "../styles";
import { useState } from "react"
import { Button } from "react-bootstrap";
import { useForm, SetFieldValue } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { useMapEvents, MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet"
import { FormButtonNav } from "../FormButtonsNav";

import { FormStepTypes } from "../../../types/types";

export const FormLocation = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const { register, handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues({position})
    nextFormStep()
  }

  const [position, setPosition] = useState<any>(null)

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        //map.locate()
        const latlng = map.mouseEventToLatLng(e.originalEvent);
        setPosition(latlng)
        console.log("posição clicada " + latlng)
      },
    })
    return position === null ? null : (
      <Marker position={position}></Marker>
    )
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const LatLng = { lat: position.coords.latitude, lng: position.coords.longitude }
      setPosition(LatLng)
    });

  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == orderStep ? {} : { display: 'none' }} autoComplete="off">
      <h5>Localização do Cliente</h5>
      <FormLocationContainer>
        <div className="map-style">
          {position &&
            <MapContainer style={{ width: "100%", height: "100%" }}
              center={position}
              zoom={17}
              scrollWheelZoom={true}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />
            </MapContainer>}
        </div>
        <p>{position && position.lat + ", " + position.lng}</p>
        <Button variant="success" size="sm" onClick={getPosition}>Obter Localização</Button>
      </FormLocationContainer>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}
import "leaflet/dist/leaflet.css";
import { FormLocationContainer } from "./styles";
import { FormStyled } from "../styles";
import { useState } from "react"
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { useMapEvents, MapContainer, TileLayer, Marker } from "react-leaflet"
import { FormButtonNav } from "../FormButtonsNav";
import { FormStepTypes } from "../../../types/types";
import { Icon } from "leaflet";

import iconMap from "../../../assets/img/icon_maker.svg"

export const FormLocation = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const personalIcon = new Icon({
    iconUrl: iconMap,
    iconSize: [35, 45],
    iconAnchor: [30, 40],
  })

  const { handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues({ position })
    nextFormStep()
  }

  const [position, setPosition] = useState<any>(null)

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        //map.locate()
        setPosition({...map.mouseEventToLatLng(e.originalEvent)})
      },
    })
    return position === null ? null : (
      <Marker icon={personalIcon} position={ position }></Marker>
    )
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
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
              zoom={18}
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
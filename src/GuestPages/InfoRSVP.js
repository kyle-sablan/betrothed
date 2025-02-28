/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { BFaustinaH2 } from '../Common/styled/textstyles/FaustinaH2';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';

const InfoRsvp = ({ onSameLine, showDeadline, coupleInfo }) => {
  const {
    coupleName1,
    coupleName2,
    date,
    time,
    rsvpDeadline,
    venue,
    address,
    location,
  } = coupleInfo;
  return (
    <>
      {onSameLine ? (
        <BAlexBrushH1 className="d-flex justify-content-center mt-5">
          {coupleName1} & {coupleName2}
        </BAlexBrushH1>
      ) : (
        <>
          <BAlexBrushH1 className="d-flex justify-content-center mt-3">
            {coupleName1}
          </BAlexBrushH1>
          <BAlexBrushH1 className="d-flex justify-content-center mt-1">
            &
          </BAlexBrushH1>
          <BAlexBrushH1 className="d-flex justify-content-center mt-1">
            {coupleName2}
          </BAlexBrushH1>
        </>
      )}
      <BFaustinaH2
        className="d-flex justify-content-center"
        style={{
          fontStyle: 'italic',
        }}
      >
        invite you to celebrate their wedding
      </BFaustinaH2>
      <StyledHeader className="d-flex justify-content-center mt-5">
        {date}
      </StyledHeader>
      <StyledHeader className="d-flex justify-content-center">
        {time}
      </StyledHeader>
      <StyledHeader className="d-flex justify-content-center mt-5">
        {venue}
      </StyledHeader>
      <StyledHeader className="d-flex justify-content-center">
        {address}
      </StyledHeader>
      <StyledHeader className="d-flex justify-content-center">
        {location}
      </StyledHeader>
      {showDeadline && (
        <StyledHeader
          className="d-flex justify-content-center mt-3"
          style={{ color: 'red' }}
        >
          Deadline to RSVP: {rsvpDeadline}
        </StyledHeader>
      )}
    </>
  );
};

const TempHeader = styled.div`
  font-family: Faustina serif;
  font-style: italic;
`;

const StyledHeader = styled(BFaustinaH3)`
  font-style: italic;
`;

export default InfoRsvp;

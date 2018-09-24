import React from "react";
import { Qualify, InfoLine, Body } from "../styled/Card";

export default ({ info, qualify }) => {
  return (
    <Body>
      <Qualify qualify={qualify}>
        {qualify ? (
          <div>
            <h3>
              Yay! You qualify for a credit card
              <span
                style={{ fontSize: 20, paddingLeft: 8 }}
                role="img"
                aria-label="party"
              >
                🎉
              </span>
            </h3>
            <p>A credit card is a great option for you right now.</p>
          </div>
        ) : (
          <div>
            <h2>You don't qualify for a credit card at the moment</h2>
            <p>Please see other options.</p>
          </div>
        )}
      </Qualify>
      <h3>Here's what issuers are looking for</h3>
      {info.map(({ title, value, id }) => (
        <InfoLine key={id}>
          <p>{title}</p>
          <p>{value}</p>
        </InfoLine>
      ))}
    </Body>
  );
};

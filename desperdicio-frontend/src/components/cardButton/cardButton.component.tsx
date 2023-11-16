import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { CardButtonWrapper } from "./cardButton.style";

function CardButton({ children, to }: {children: string,  to: string}) {
  const navigate = useNavigate();

  return (
    <CardButtonWrapper onClick={() => navigate(to)}>
      {children}
    </CardButtonWrapper>
  );
}

export default React.memo(CardButton);

import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardModal from "../../components/card/CardModal";
import { getCardSuccess } from "../../redux/card/get/getCardActions";
import getCard from "../../redux/card/get/getCardService";
import updateCard from "../../redux/card/update/updateCardService";

function CardContainer() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootStateOrAny) => state.card
  );
  //@ts-ignore
  const { cardId } = useParams();

  useEffect(() => {
    if (data._id !== cardId) dispatch(getCard(cardId));
  }, [cardId]);

  const updateCardValue = (key: string, value: string) => {
    //update on client side
    data[key] = value;
    dispatch(getCardSuccess(data));

    dispatch(updateCard({ [key]: value }, cardId));
  };

  return (
    <CardModal
      loading={loading}
      card={data}
      updateCardValue={updateCardValue}
    />
  );
}

export default CardContainer;
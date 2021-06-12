import { useToast } from "@chakra-ui/toast";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import CardModal from "../../components/card/CardModal";
import SEO from "../../components/global/SEO";
import { getCardSuccess } from "../../redux/card/get/getCardActions";
import getCard from "../../redux/card/get/getCardService";
import updateCard from "../../redux/card/update/updateCardService";
import getImageUrl from "../../utils/GetImageUrl";
import errorToast from "../../utils/toast/errorToast";

function CardContainer() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootStateOrAny) => state.card
  );
  const { cardId } = useParams<{ cardId: string }>();
  const location = useLocation();

  useEffect(() => {
    if (data._id !== cardId) dispatch(getCard(cardId));
  }, [cardId]);

  useEffect(() => {
    if (error)
      toast({
        ...errorToast,
        description: error,
      });
  }, [error]);

  const updateCardValue = (key: string, value: string) => {
    //update on client side
    data[key] = value;
    dispatch(getCardSuccess(data));

    dispatch(updateCard({ [key]: value }, cardId));
  };

  return (
    <>
      <SEO
        prefix={data ? `${data.title} on ${data.board.title}` : "Board card"}
        path={location.pathname}
        ogImageUrl={`${getImageUrl(data.board.background)}&w=1200&h=630`}
        description={data ? data.description : ""}
      />
      <CardModal
        loading={loading}
        card={data}
        updateCardValue={updateCardValue}
      />
    </>
  );
}

export default CardContainer;

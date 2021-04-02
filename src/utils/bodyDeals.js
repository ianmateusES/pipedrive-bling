export default function bodyDeals(deal) {
  const {
    id,
    title,
    person_id: person,
    org_name,
    stage_id: stage_pipeline,
    value,
    expected_close_date,
    owner_name,
    fee6c160dc820526fd1d223930bf45027cb4f6a0: cnpj,
  } = deal;
  const body = {
    id,
    title,
    org_name,
    cnpj,
    person,
    stage_pipeline,
    expected_close_date,
    owner_name,
    value,
  };
  return body;
}

function bodyDeals(deal) {
  const {
    id,
    title,
    person_id: person,
    org_name,
    stage_id: stage_pipeline,
    value,
    expected_close_date,
    owner_name,
    '068c7068890cdb1c5bdddb0c66f876626840ab68': cnpj,
  } = deal;

  const body = {
    id,
    title,
    org_name,
    cnpj,
    person: { name: person.name, email: person.email, phone: person.phone },
    stage_pipeline,
    expected_close_date,
    owner_name,
    value,
  };
  return body;
}

export default bodyDeals;

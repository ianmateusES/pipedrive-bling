import * as yup from 'yup';
import AppError from '../errors/AppError';

async function validationOrder(orderArray) {
  const schema = yup.array().of(
    yup.object().shape({
      id: yup.number().required(),
      title: yup.string().required(),
      org_name: yup.string().required(),
      cnpj: yup.string().required(),
      person: yup
        .object()
        .shape({
          name: yup.string().required(),
          email: yup.array().of(
            yup.object().shape({
              label: yup.string(),
              value: yup.string().email(),
              primary: yup.boolean(),
            }),
          ),
          phone: yup.array().of(
            yup.object().shape({
              label: yup.string(),
              value: yup.string(),
              primary: yup.boolean(),
            }),
          ),
        })
        .required(),
      stage_pipeline: yup.number().required(),
      expected_close_date: yup.date().required(),
      owner_name: yup.string().required(),
      value: yup.number().required(),
    }),
  );
  schema.validate(orderArray).catch(err => {
    throw new AppError(`${err.name}: ${err.errors}`, 406);
  });
}

export default validationOrder;

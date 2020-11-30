import * as React from "react";
import { API } from "aws-amplify";

interface Props {
  appointmentId: number
}

export const Foo: React.FC<Props> = (props) => {
  const appointmentId = props.appointmentId;
  const [doctorId, setDoctorId] = React.useState<any>();
  const [doctor, setDoctor] = React.useState<any>();

  React.useEffect(() => {
    const loadDoctor = async () => {
      if (doctorId) {
        const doctorData = await API.post("backend", "/doctor/get", {
          body: {
            doctorId: doctorId
          }
        });
        console.log("This does come", doctorData);
        setDoctor(doctorData);
      }
    };
    loadDoctor();
  }, [doctorId]);

  React.useEffect(() => {
    const loadAppointment = async () => {
      if (appointmentId) {
        const appointmentData = await API.post("backend", "/appointment/get", {
          body: {
            appointmentId: appointmentId
          }
        });
        console.log("This Loads", appointmentData);
        setDoctorId(appointmentData.doctorId);
      }
    };
    loadAppointment();
  }, [appointmentId]);

  return doctor ? <div>{doctor.name}</div> : <div>Loading...</div>;
};

export default Foo;


import {
  Model, Optional
} from 'sequelize'; // v6.3.5


interface DefaultAttributes {
  id: number;
}
interface TestAttributes extends DefaultAttributes {
  field: number;
}

class BaseModel<T extends DefaultAttributes> extends Model<T, Optional<T, 'id'>> {
  static test() {}
}

class MyModel extends BaseModel<TestAttributes> {}

// T can't be `extends typeof BaseModel`
// If you assign `MyModel extends BaseModel`, `TestAttributes` (MyModel) vs 'T' (BaseModel)
function method<T extends typeof BaseModel>(model: T) {
  model.test();
}

method(MyModel);

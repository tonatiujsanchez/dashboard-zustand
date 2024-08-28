import { WhiteCard } from '../../components';
import { usePersonState } from '../../stores';



export const PersonPage = () => {

  const firstName = usePersonState( state => state.firstName )
  const lastName = usePersonState( state => state.lastName )
  
  const setFirstName = usePersonState( state => state.setFirstName )
  const setLastName = usePersonState( state => state.setLastName )



  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Primer Nombre"
                    value={ firstName }
                    onChange={ ({ target })=> setFirstName(target.value) }
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Apellido"
                    value={ lastName }
                    onChange={ ({ target })=> setLastName(target.value) }
                  />
                </div>
              </div>
            </div>
  
            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {
                JSON.stringify({
                  firstName: firstName,
                  lastName: lastName
                }, null, 2)
              }
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
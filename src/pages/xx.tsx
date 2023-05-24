import { useEffect } from "react";

export default function Example() {
  useEffect(() => {
    //localStorage.setItem('abc', 'abc');
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-28 w-auto"
            src="https://i.imgur.com/PXTRcsy.png"
            alt="AltaRepair"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Painel Administrativo</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="passport" className="block text-sm font-medium leading-6 text-gray-900">
                  Passaporte
                </label>
                <div className="mt-2">
                  <input
                    id="passport"
                    type="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pin" className="block text-sm font-medium leading-6 text-gray-900">
                  PIN
                </label>
                <div className="mt-2">
                  <input
                    id="pin"
                    type="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

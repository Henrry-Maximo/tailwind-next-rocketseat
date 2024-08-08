import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Setting</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              form=""
              className="shadow-smborder rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-600"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" action="" className="mt-6 flex w-full flex-col">
          form
        </form>
      </div>
    </>

    // <div className="flex h-screen flex-col items-center bg-slate-50 p-64 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
    //   <div className="max-w-[10px]">
    //     <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
    //       Rapidly build modern websites without ever leaving your HTML.
    //     </h1>
    //     <p className="mt-4 dark:text-slate-400">
    //       A utility-first CSS framework packed with classes like flex, pt-4,
    //       text-center and rotate-90 that can be composed to build any design,
    //       directly in your markup.
    //     </p>
    //     <p>Bora codar 🎉</p>
    //     <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-semibold text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-sky-950">
    //       Sign in
    //     </button>
    //   </div>
    // </div>
  )
}

// VALORES ARBITRÁRIOS:
// [] -> EVITAR (USAR TAILWIND.CONFIG PARA INSERIR VALORES DIFERENTES)

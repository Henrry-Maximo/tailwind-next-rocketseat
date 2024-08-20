import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '../components/Input/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Mail } from 'lucide-react'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Select } from '@/components/Form/Select'

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

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 p-4"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  defaultValue={'Henrique'}
                ></Input.Control>
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue={'Maximo'}></Input.Control>
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue={'henrique.maximo@albras.com'}
              ></Input.Control>
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue={'CTO'}></Input.Control>
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
              <SelectItem value="jp" text="Japan" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Protfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              form=""
              className="shadow-smborder rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-600"
            >
              Save
            </button>
          </div>
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

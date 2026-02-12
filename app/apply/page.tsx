import type { Metadata } from "next";
import Link from "next/link";
import { buttonClassName } from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Apply Now | The Sapphire Tampa",
  description: "Submit your application to join The Sapphire Tampa team.",
};

const POSITIONS = [
  "Security",
  "Host/Hostess",
  "Service Assistant",
  "Server",
  "Bartender",
  "Dish/Utility",
  "Line Cook",
  "Prep Cook",
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#0B47FF]";

const labelClass = "mb-2 block text-sm font-medium tracking-[0.02em] text-white/90";

const sectionClass =
  "relative space-y-5 rounded-2xl border border-white/15 bg-black/35 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)] md:p-8";

export default function ApplyPage() {
  return (
    <main className="relative min-h-screen bg-[#05070D] px-6 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.22),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(67,56,202,0.18),transparent_40%)]" />
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-[0.08em] md:text-5xl">Apply Now</h1>
          <Link
            href="/"
            className={buttonClassName({ variant: "secondary", size: "md" })}
          >
            Back Home
          </Link>
        </div>

        <p className="text-balance mb-10 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          Interested in joining The Sapphire team? Fill out the form below and we&apos;ll review your
          application. Due to high volume, selected applicants will be contacted to schedule an interview.
        </p>

        <form className="space-y-8">
          {/* ── Contact Info ── */}
          <div className={sectionClass}>
            <SectionHeading>Contact Information</SectionHeading>

            <Field label="Full Name" name="name" type="text" placeholder="First and Last Name" required />

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" required />
            </div>
          </div>

          {/* ── Position & Availability ── */}
          <div className={sectionClass}>
            <SectionHeading>Position &amp; Availability</SectionHeading>

            <fieldset>
              <legend className={labelClass}>
                Which position(s) are you interested in? <span className="text-red-400">*</span>
              </legend>
              <div className="mt-1 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {POSITIONS.map((pos) => (
                  <label key={pos} className="flex items-center gap-2 text-sm text-white/80">
                    <input
                      type="checkbox"
                      name="positions"
                      value={pos}
                      className="h-4 w-4 rounded border-white/30 bg-white/5 text-[#0B47FF] accent-[#0B47FF]"
                    />
                    {pos}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className={labelClass}>Availability</legend>
              <div className="mt-1 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="pb-2 pr-4 text-left text-xs font-medium text-white/50" />
                      {DAYS.map((d) => (
                        <th key={d} className="pb-2 text-center text-xs font-medium text-white/50">
                          {d.slice(0, 3)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {["Available", "Unavailable"].map((row) => (
                      <tr key={row}>
                        <td className="pr-4 py-2 text-sm text-white/75">{row}</td>
                        {DAYS.map((day) => (
                          <td key={day} className="py-2 text-center">
                            <input
                              type="checkbox"
                              name={`availability_${row.toLowerCase()}`}
                              value={day}
                              className="h-4 w-4 rounded border-white/30 bg-white/5 accent-[#0B47FF]"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>

          {/* ── Previous Employment ── */}
          <div className={sectionClass}>
            <SectionHeading>Previous Employment</SectionHeading>
            <p className="!mt-1 text-xs text-white/50">Leave blank if provided on resume.</p>

            <label className="block">
              <span className={labelClass}>Upload Resume / Cover Letter</span>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-white/70 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white file:transition file:hover:bg-white/20"
              />
            </label>

            <EmployerBlock index={1} />
            <EmployerBlock index={2} />
          </div>

          {/* ── References ── */}
          <div className={sectionClass}>
            <SectionHeading>Business &amp; Professional References</SectionHeading>
            <p className="!mt-1 text-xs text-white/50">
              By providing these references, you authorize The Sapphire Tampa to make contact for verification purposes.
            </p>

            <label className="block">
              <span className={labelClass}>
                Reference 1 <span className="text-red-400">*</span>
              </span>
              <textarea
                name="reference1"
                rows={3}
                required
                className={inputClass}
                placeholder="Name and Title, Relationship, Phone Number"
              />
            </label>

            <label className="block">
              <span className={labelClass}>
                Reference 2 <span className="text-red-400">*</span>
              </span>
              <textarea
                name="reference2"
                rows={3}
                required
                className={inputClass}
                placeholder="Name and Title, Relationship, Phone Number"
              />
            </label>
          </div>

          {/* ── Agreement ── */}
          <div className={sectionClass}>
            <SectionHeading>Applicant Agreement</SectionHeading>

            <div className="max-h-48 overflow-y-auto rounded-lg border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/55">
              <p>
                By submitting my application I hereby authorize the company to thoroughly investigate my references,
                work record, education and other matters related to my suitability for employment. I understand that
                my employment is at-will and that either party may terminate the relationship at any time.
              </p>
              <p className="mt-3">
                I certify that the answers given are true and correct to the best of my knowledge. I understand that
                any omission or misstatement of material fact shall be grounds for rejection or immediate discharge.
              </p>
              <p className="mt-3">
                All new hires will be verified through the federal E-Verify system. I consent to be contacted by
                The Sapphire Lounge Tampa regarding my application status. All applicants are considered without
                regard to race, religion, color, sex, gender, age, national origin, disability, or any other
                protected classification.
              </p>
            </div>

            <fieldset className="mt-4">
              <legend className={labelClass}>
                I agree to receive interview scheduling messages <span className="text-red-400">*</span>
              </legend>
              <div className="mt-1 flex gap-6">
                <label className="flex items-center gap-2 text-sm text-white/80">
                  <input type="radio" name="smsConsent" value="yes" required className="accent-[#0B47FF]" />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm text-white/80">
                  <input type="radio" name="smsConsent" value="no" className="accent-[#0B47FF]" />
                  No
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              className={buttonClassName({ variant: "primary", size: "lg", className: "mt-2 w-full md:w-auto px-9" })}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

/* ── Helpers ── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-[0.32em] text-white/55">{children}</h2>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type, required, placeholder }: FieldProps) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label} {required && <span className="text-red-400">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

function EmployerBlock({ index }: { index: number }) {
  return (
    <div className="space-y-4 rounded-xl border border-white/8 bg-white/[0.01] p-5">
      <div className="text-xs font-medium tracking-[0.12em] text-white/45">EMPLOYER {index}</div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name of Employer" name={`employer${index}_name`} type="text" />
        <Field label="Job Title" name={`employer${index}_title`} type="text" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Start Date" name={`employer${index}_start`} type="date" />
        <Field label="End Date" name={`employer${index}_end`} type="date" />
      </div>
      <label className="flex items-center gap-2 text-sm text-white/75">
        <input
          type="checkbox"
          name={`employer${index}_current`}
          value="yes"
          className="h-4 w-4 rounded border-white/30 bg-white/5 accent-[#0B47FF]"
        />
        I still work here
      </label>
      <Field label="Reason for Leaving" name={`employer${index}_reason`} type="text" />
    </div>
  );
}

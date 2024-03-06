/* Parallel routes are created using named slots @folder
slots passed as props to shared parent layout and render paralle with children prop
*/
export default function Layout({
    children,
    team, //@team
    analytics,
}: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
}) {
    return (
        <>
            {children}
            {team}
            {analytics}
        </>
    )
}

// default.js is fallback for unmatched slots
// Intercepting Routes can be used together with Parallel Routes to create modals.This allows you to solve common challenges when building modals, 
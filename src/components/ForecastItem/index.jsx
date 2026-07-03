export function ForecastItem(){
    return(
        <section className="flex flex-col items-center w-26 min-h-38 py-4 bg-text/15 rounded-2xl">
            <h2 className="text-[16px]">Qua</h2>
            <p className="text-[13px]">04/07/2026</p>
            <img className="w-10 h-18 py-4" src="/icons-weather/cloud.svg" alt="" />
            <h3 className="text-[20px] font-semibold">20/30°</h3>
        </section>
    )
}
const DATA = {
  status: "Standart",
  remainingTime: "10 часов  23 минуты",
};

export default function ClientStatus() {
  return (
    <section className="dashboard-box flex flex-col gap-4">
      <section className="flex items-center justify-between">
        <p>Текущий статус:</p>
        <b className="uppercase">{DATA.status}</b>
      </section>
      <section className="flex items-center justify-between">
        <p>До смены статуса осталось:</p>
        <b>{DATA.remainingTime}</b>
      </section>
    </section>
  );
}

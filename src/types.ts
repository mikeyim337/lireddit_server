export type MyContext {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}
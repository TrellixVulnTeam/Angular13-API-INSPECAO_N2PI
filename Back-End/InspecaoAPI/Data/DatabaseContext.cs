using InspecaoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace InspecaoAPI.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
        public DbSet<Inspecao> Inspecoes { get; set; }
        public DbSet<InspecaoTipo> InspecaoTipos { get; set; }
        public DbSet<Status> Status { get; set; }
    }
}

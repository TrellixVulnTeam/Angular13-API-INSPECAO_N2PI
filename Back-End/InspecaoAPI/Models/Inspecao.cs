using System.ComponentModel.DataAnnotations;

namespace InspecaoAPI.Models
{
    public class Inspecao
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;

        [StringLength(200)]
        public string Comentario { get; set; } = string.Empty;
        public int InspecaoTipoId { get; set; }
        public InspecaoTipo? InspecaoTipo { get; set; }
    }
}
